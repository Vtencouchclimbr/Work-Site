import './CountyClerks.css';

const CountyClerks = () => {
  return (
    <div className="county-clerks">
      <h1>County Clerks for FrontRunner Areas</h1>

      <h2>Weber County</h2>
      <div className="clerk-info">
        <p><strong>Clerk/Auditor:</strong> Ricky Hatch</p>
        <p><strong>Website:</strong> <a href="https://www.webercountyutah.gov/Clerk_Auditor" target="_blank" rel="noopener noreferrer">webercountyutah.gov/Clerk_Auditor</a></p>
        <p><strong>Phone:</strong> (801) 399-8400</p>
        <p><strong>Email:</strong> <a href="mailto:clerk-auditor@webercountyutah.gov">clerk-auditor@webercountyutah.gov</a></p>
        <p><strong>Address:</strong> 2380 Washington Blvd, Suite 320, Ogden, UT 84401</p>
        <p><strong>Relevant Areas:</strong> Ogden, Roy, Clearfield</p>
      </div>

      <h2>Davis County</h2>
      <div className="clerk-info">
        <p><strong>Clerk/Auditor:</strong> Curtis Koch</p>
        <p><strong>Website:</strong> <a href="https://www.daviscountyutah.gov/clerk" target="_blank" rel="noopener noreferrer">daviscountyutah.gov/clerk</a></p>
        <p><strong>Phone:</strong> (801) 451-3213</p>
        <p><strong>Email:</strong> <a href="mailto:clerk@daviscountyutah.gov">clerk@daviscountyutah.gov</a></p>
        <p><strong>Address:</strong> 61 South Main Street, Farmington, UT 84025</p>
        <p><strong>Relevant Areas:</strong> Layton, Farmington, Woods Cross</p>
      </div>

      <h2>Salt Lake County</h2>
      <div className="clerk-info">
        <p><strong>Clerk:</strong> Lannie Chapman (Interim)</p>
        <p><strong>Website:</strong> <a href="https://www.slco.org/clerk" target="_blank" rel="noopener noreferrer">slco.org/clerk</a></p>
        <p><strong>Phone:</strong> (385) 468-7300</p>
        <p><strong>Email:</strong> <a href="mailto:clerk@slco.org">clerk@slco.org</a></p>
        <p><strong>Address:</strong> 2001 South State Street, Suite S1-200, Salt Lake City, UT 84190</p>
        <p><strong>Relevant Areas:</strong> Salt Lake City (North Temple, Salt Lake Central), Murray, South Jordan, Draper, The Point (potential)</p>
      </div>

      <h2>Utah County</h2>
      <div className="clerk-info">
        <p><strong>Clerk/Auditor:</strong> Aaron Davidson</p>
        <p><strong>Website:</strong> <a href="https://www.utahcounty.gov/Dept/ClerkAud" target="_blank" rel="noopener noreferrer">utahcounty.gov/Dept/ClerkAud</a></p>
        <p><strong>Phone:</strong> (801) 851-8109</p>
        <p><strong>Email:</strong> <a href="mailto:clerkoffice@utahcounty.gov">clerkoffice@utahcounty.gov</a></p>
        <p><strong>Address:</strong> 100 East Center Street, Suite 3600, Provo, UT 84606</p>
        <p><strong>Relevant Areas:</strong> Lehi, American Fork, Vineyard, Orem, Provo, Payson (potential)</p>
      </div>
    </div>
  );
};

export default CountyClerks;