import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: rgba(31, 41, 55);
          opacity: 1;
        }
      `}</style>{' '}
      <Navbar />
      <div className="container mx-auto px-40 ">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
