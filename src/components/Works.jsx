const Works = () => {
  return (
    <div className="h-full lg:h-screen w-full my-8">
      <div className="flex flex-row items-center justify-between px-4 mb-4">
        <h1 className="text-sm font-bold uppercase">Works</h1>
        <h1 className="text-sm font-bold uppercase">zweimal 23&apos;</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4 px-4">
        <div>
          <div className="p-2 bg-white rounded-lg flex flex-col justify-stretch h-auto shadow-lg">
            <div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-56 max-w-full rounded-lg"
                      src="https://i.pinimg.com/236x/da/16/53/da165310984a55190d21014bd1634dbd.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-48 max-w-full rounded-lg"
                      src="https://i.pinimg.com/236x/de/34/af/de34aff62bd60dbda6f57e151c7e905c.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-48 max-w-full rounded-lg"
                      src="https://i.pinimg.com/236x/72/85/24/7285248504baf30468dc9b9b83d1d1de.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-52 max-w-full rounded-lg"
                      src="https://i.pinimg.com/236x/1a/6c/68/1a6c68b5fc008bf1fa5834cc0ba8abc8.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center pt-24">
              <h1 className="font-bold text-6xl">ZWE</h1>
              <h1 className="font-bold text-6xl">I</h1>
              <h1 className="font-bold text-6xl">MAL</h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-white rounded-lg shadow-lg">
          <img
            className="md:h-[44vw] w-full rounded-lg"
            src="/tatt.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
