// dependencies

const ShortBio = () => {
  return (
    <section className="text-gray-600 body-font min-h-screen ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            I am Žiga Grošelj,
            <br className="hidden lg:inline-block" />
            front-end & back-end developer.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-400">
            After professionally racing bikes for more than 5 years, racing
            across Europe and China, it was time for a career change. That is
            why 2 years ago I started to teach myself about programming and web
            development. Web development and programming gives me satisfaction
            and enjoyment in solving problems.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Tools & Skills
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Contact Me
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default ShortBio;
