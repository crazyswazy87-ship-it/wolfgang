import { useEffect, useMemo, useState } from "react";
import { Query } from "appwrite";
import { toast } from "react-toastify";
import wolf from "../../public/assets/wolff.png"


import PillNav from "../components/PillNav";
import { DATABASE_ID, databases, WAITLIST_COLLECTION_ID } from "../components/lib/appwrite";
import AnimatedList from "../components/AnimatedList";

const ADMIN_PASSWORD = "wolfgng2026";

interface Subscriber {
  $id: string;
  $createdAt: string;
  email: string;
}



export default function Admin() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const [loading, setLoading] = useState(false);
  const [emails, setEmails] = useState<Subscriber[]>([]);
  const [search, setSearch] = useState("");


  const login = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthorized(true);
    } else {
      toast("Wrong password");
    }
  };

  const loadEmails = async () => {
    try {
      setLoading(true);

      const response = await databases.listDocuments(
        DATABASE_ID,
        WAITLIST_COLLECTION_ID,
        [Query.orderDesc("$createdAt")]
      );

      setEmails(response.documents as unknown as Subscriber[]);
    } catch (error) {
      console.error(error);
      toast("Failed to load waitlist");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
  if (authorized) {
    loadEmails();
  }
}, [authorized]);

  const filteredEmails = useMemo(() => {
    return emails.filter((item) =>
      item.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [emails, search]);

  const exportCSV = () => {
    const headers = ["Email", "Joined"];

    const rows = filteredEmails.map((user) => [
      user.email,
      new Date(user.$createdAt).toLocaleString(),
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "wolfgng-waitlist.csv";
    link.click();

    URL.revokeObjectURL(url);
  };


 

  if (!authorized) {
    return (
      <div
       className="home-cony"
      >
        <div
          className="seer"
        >
          <h1 className="stormzy">WolfGNG Admin</h1>
          <img 
            src={wolf}
            alt="wolfy"
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            className="seaker"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "1rem",
            }}
          />

          <button
            onClick={login}
            className="btn-gradd"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
     className="home-cony"
    >
      {/*Pill Nav*/}
      <PillNav
        logo={wolf}
        logoAlt="Company Logo"
        items={[
          { label: 'About', href: '/wolfgng' },
          { label: 'Waitlist', href: '/andime' },
          { label: 'Dashboard', href: '/post' },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        theme="light"
        initialLoadAnimation={false}
      />
      <img 
        src={wolf}
        alt="wolfy"
        className="koima"
      />

    <h1>WolfGNG Waitlist Dashboard</h1>
      <div
        className="mbaya"
      >
        <div>
          <strong>Total Subscribers:</strong> {emails.length}
        </div>

        <button 
        className="btn-gradd" onClick={loadEmails}>
          Refresh
        </button>

        <button
        className="btn-gradd"
         onClick={exportCSV}>
          Export CSV
        </button>
      </div>

      <input
        type="text"
        placeholder="Search email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "12px",
          marginTop: "1rem",
        }}
        className="seaker"
      />

        {loading ? (
  <p>Fetching...</p>
        ) : (
          <div className="timber">
            <div className="timber-head">
              <span>Email</span>
              <span>Joined</span>
            </div>

            <AnimatedList
              items={filteredEmails.map((user) => (
                <div key={user.$id} className="timber-row">
                  <span>{user.email}</span>

                  <span>{new Date(user.$createdAt).toLocaleString()}</span>
                </div>
              ))}
              onItemSelect={(_, index) => console.log(filteredEmails[index], index)}
              showGradients
              enableArrowNavigation
              displayScrollbar
              className="uradii"
            />
          </div>
        )}

    </div>
  );
}