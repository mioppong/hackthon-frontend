import StickyBox from "react-sticky-box/dist/esnext";

const HomePage = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "auto" }}>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {/* LEFT SIDE */}
        <StickyBox style={{ border: "3px solid green", with: "15vw" }}>
          Sidebar
        </StickyBox>

        <div style={{ width: "70vw", border: "3px solid blue" }}>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
        </div>

        {/* RIGHT SIDE */}
        <StickyBox style={{ border: "3px solid green", with: "15vw" }}>
          Sidebar
        </StickyBox>
      </div>
    </div>
  );
};

export default HomePage;
