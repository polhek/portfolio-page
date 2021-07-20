import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: rgba(17, 24, 39);
          opacity: 1;
          color: white;
        }
      `}</style>
      <Navbar />
      <div className="container mx-auto  md:px-40">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
