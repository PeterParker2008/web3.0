import * as React from "react";

function MyComponent(props) {
  return (
    <div className="bg-slate-950 flex flex-col items-stretch">
      <div className="items-center bg-slate-950 z-[1] flex w-full flex-col justify-center px-16 py-8 max-md:max-w-full max-md:px-5">
        <div className="justify-between items-center flex w-full max-w-[1216px] gap-5 py-2.5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-white text-xl font-semibold leading-6 my-auto">
            Your Name
          </div>
          <div className="items-start self-stretch flex justify-between gap-5 pl-2 py-1 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-xl font-bold leading-6 whitespace-nowrap items-stretch self-center aspect-[1.5172413793103448] justify-center my-auto py-1 border-b-white border-b border-solid">
              Blog
            </div>
            <div className="text-white text-xl leading-6 self-center my-auto">
              Projects
            </div>
            <div className="text-white text-xl leading-6 self-center my-auto">
              About
            </div>
            <div className="text-white text-xl leading-6 my-auto">
              Newsletter
            </div>
            <div className="items-stretch bg-white self-stretch flex justify-between gap-4 px-4 py-2 rounded-[29px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cc27873bf816023b47bee6d7a43e81cc2538fec5694e9a0b94dead4ad01a60d?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd90f5dbf53f96606947fbf253858036723ac930557de1c1f9be46910949888e?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-slate-950 flex mt-0 w-full flex-col px-16 py-8 max-md:max-w-full max-md:px-5">
        <div className="text-white text-[244px] font-bold items-stretch justify-center pl-0 border-y-white border-t border-solid border-b max-md:max-w-full max-md:text-4xl">
          WINDOWS
        </div>
      </div>
      <div className="items-center bg-slate-950 flex w-full flex-col pt-8 max-md:max-w-full">
        <div className="items-stretch flex w-full max-w-screen-xl flex-col px-8 max-md:max-w-full max-md:px-5">
          <div className="text-white text-2xl font-semibold leading-8 max-md:max-w-full">
            Recent blog posts
          </div>
          <div className="mt-8 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/31dee692e996151577091c2bef9b3527e2e18314cd94ac8e9a9e9bbd3180c23d?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31dee692e996151577091c2bef9b3527e2e18314cd94ac8e9a9e9bbd3180c23d?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31dee692e996151577091c2bef9b3527e2e18314cd94ac8e9a9e9bbd3180c23d?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31dee692e996151577091c2bef9b3527e2e18314cd94ac8e9a9e9bbd3180c23d?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31dee692e996151577091c2bef9b3527e2e18314cd94ac8e9a9e9bbd3180c23d?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31dee692e996151577091c2bef9b3527e2e18314cd94ac8e9a9e9bbd3180c23d?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31dee692e996151577091c2bef9b3527e2e18314cd94ac8e9a9e9bbd3180c23d?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31dee692e996151577091c2bef9b3527e2e18314cd94ac8e9a9e9bbd3180c23d?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                    className="aspect-[2.6] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                  />
                  <div className="text-violet-700 text-sm font-semibold leading-5 mt-8 max-md:max-w-full">
                    Sunday , 1 Jan 2023
                  </div>
                  <div className="items-stretch flex justify-between gap-4 mt-3 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-white text-2xl font-semibold leading-8 grow max-md:max-w-full">
                      UX review presentations
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e0a1f43d3b82ec78046cf7c855c3663b5565d6e7331ccc540c85f06c0cec9d0?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                      className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                  <div className="text-neutral-300 text-base leading-6 mt-3 max-md:max-w-full">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </div>
                  <div className="items-stretch flex gap-2 mt-6 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                    <div className="text-violet-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-purple-50 aspect-[2.7916666666666665] px-2.5 py-0.5 rounded-2xl">
                      Design
                    </div>
                    <div className="text-indigo-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-indigo-50 grow px-2.5 py-0.5 rounded-2xl">
                      Research
                    </div>
                    <div className="text-pink-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-pink-50 grow px-2.5 py-0.5 rounded-2xl">
                      Presentation
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch flex grow flex-col max-md:max-w-full max-md:mt-8">
                  <div className="max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66031c4a608cf5420b335eb1e4e14b6f97a2aa7a6fea03dc6badb8e435535d3e?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66031c4a608cf5420b335eb1e4e14b6f97a2aa7a6fea03dc6badb8e435535d3e?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66031c4a608cf5420b335eb1e4e14b6f97a2aa7a6fea03dc6badb8e435535d3e?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66031c4a608cf5420b335eb1e4e14b6f97a2aa7a6fea03dc6badb8e435535d3e?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66031c4a608cf5420b335eb1e4e14b6f97a2aa7a6fea03dc6badb8e435535d3e?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66031c4a608cf5420b335eb1e4e14b6f97a2aa7a6fea03dc6badb8e435535d3e?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66031c4a608cf5420b335eb1e4e14b6f97a2aa7a6fea03dc6badb8e435535d3e?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66031c4a608cf5420b335eb1e4e14b6f97a2aa7a6fea03dc6badb8e435535d3e?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                          className="aspect-[1.6] object-contain object-center w-full overflow-hidden grow max-md:mt-6"
                        />
                      </div>
                      <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:mt-6">
                          <div className="text-violet-700 text-sm font-semibold leading-5 whitespace-nowrap">
                            Sunday , 1 Jan 2023
                          </div>
                          <div className="text-white text-lg font-semibold leading-7 whitespace-nowrap mt-3">
                            Migrating to Linear 101
                          </div>
                          <div className="text-neutral-300 text-base leading-6 mt-2">
                            Linear helps streamline software projects, sprints,
                            tasks, and bug tracking. Here’s how to get...
                          </div>
                          <div className="items-stretch flex justify-between gap-2 mt-6">
                            <div className="text-sky-700 text-center text-sm font-medium leading-5 justify-center items-stretch bg-sky-50 grow px-2.5 py-0.5 rounded-2xl">
                              Design
                            </div>
                            <div className="text-pink-700 text-center text-sm font-medium leading-5 justify-center items-stretch bg-pink-50 grow px-2.5 py-0.5 rounded-2xl">
                              Research
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a3afa2d7880c32ca70f1594cbd744373b2f69e19af3695be15239284eb9ed817?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3afa2d7880c32ca70f1594cbd744373b2f69e19af3695be15239284eb9ed817?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3afa2d7880c32ca70f1594cbd744373b2f69e19af3695be15239284eb9ed817?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3afa2d7880c32ca70f1594cbd744373b2f69e19af3695be15239284eb9ed817?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3afa2d7880c32ca70f1594cbd744373b2f69e19af3695be15239284eb9ed817?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3afa2d7880c32ca70f1594cbd744373b2f69e19af3695be15239284eb9ed817?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3afa2d7880c32ca70f1594cbd744373b2f69e19af3695be15239284eb9ed817?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3afa2d7880c32ca70f1594cbd744373b2f69e19af3695be15239284eb9ed817?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                          className="aspect-[1.6] object-contain object-center w-full overflow-hidden grow max-md:mt-6"
                        />
                      </div>
                      <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:mt-6">
                          <div className="text-violet-700 text-sm font-semibold leading-5 whitespace-nowrap">
                            Sunday , 1 Jan 2023
                          </div>
                          <div className="text-white text-lg font-semibold leading-7 whitespace-nowrap mt-3">
                            Building your API Stack
                          </div>
                          <div className="text-neutral-300 text-base leading-6 mt-2">
                            The rise of RESTful APIs has been met by a rise in
                            tools for creating, testing, and manag...
                          </div>
                          <div className="items-stretch flex justify-between gap-2 mt-6">
                            <div className="text-emerald-700 text-center text-sm font-medium leading-5 justify-center items-stretch bg-emerald-50 grow px-2.5 py-0.5 rounded-2xl">
                              Design
                            </div>
                            <div className="text-pink-700 text-center text-sm font-medium leading-5 justify-center items-stretch bg-pink-50 grow px-2.5 py-0.5 rounded-2xl">
                              Research
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center self-stretch bg-slate-950 flex w-full flex-col justify-center mt-8 px-16 py-8 max-md:max-w-full max-md:px-5">
          <div className="w-full max-w-[1216px] max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f72bf9e06701c4606dd6c7043493803ee27344b1b389fb39c3a1a36cc3fc4513?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72bf9e06701c4606dd6c7043493803ee27344b1b389fb39c3a1a36cc3fc4513?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72bf9e06701c4606dd6c7043493803ee27344b1b389fb39c3a1a36cc3fc4513?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72bf9e06701c4606dd6c7043493803ee27344b1b389fb39c3a1a36cc3fc4513?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72bf9e06701c4606dd6c7043493803ee27344b1b389fb39c3a1a36cc3fc4513?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72bf9e06701c4606dd6c7043493803ee27344b1b389fb39c3a1a36cc3fc4513?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72bf9e06701c4606dd6c7043493803ee27344b1b389fb39c3a1a36cc3fc4513?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72bf9e06701c4606dd6c7043493803ee27344b1b389fb39c3a1a36cc3fc4513?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                  className="aspect-[2.41] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
                />
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-8">
                  <div className="text-violet-700 text-sm font-semibold leading-5 max-md:max-w-full">
                    Sunday , 1 Jan 2023
                  </div>
                  <div className="items-stretch flex justify-between gap-4 mt-3 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-white text-2xl font-semibold leading-8 grow max-md:max-w-full">
                      Grid system for better Design User Interface
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e0a1f43d3b82ec78046cf7c855c3663b5565d6e7331ccc540c85f06c0cec9d0?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                      className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                  <div className="text-neutral-300 text-base leading-6 mt-3 max-md:max-w-full">
                    A grid system is a design tool used to arrange content on a
                    webpage. It is a series of vertical and horizontal lines
                    that create a matrix of intersecting points, which can be
                    used to align and organize page elements. Grid systems are
                    used to create a consistent look and feel across a website,
                    and can help to make the layout more visually appealing and
                    easier to navigate.
                  </div>
                  <div className="items-stretch flex justify-between gap-2 mt-6 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                    <div className="text-violet-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-purple-50 aspect-[2.7916666666666665] px-2.5 py-0.5 rounded-2xl">
                      Design
                    </div>
                    <div className="text-pink-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-pink-50 grow px-2.5 py-0.5 rounded-2xl">
                      Interface
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-stretch self-stretch bg-slate-950 flex w-full flex-col justify-center px-16 py-8 max-md:max-w-full max-md:px-5">
          <div className="items-stretch flex flex-col mx-5 px-8 max-md:max-w-full max-md:mr-2.5 max-md:px-5">
            <div className="text-white text-2xl font-semibold leading-8 max-md:max-w-full">
              All blog posts
            </div>
            <div className="justify-center mt-8 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7b942602e51fa53a2d5eb57bd2e8ce5a5dd3f35a4b51709b85e82c760ce72d74?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b942602e51fa53a2d5eb57bd2e8ce5a5dd3f35a4b51709b85e82c760ce72d74?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b942602e51fa53a2d5eb57bd2e8ce5a5dd3f35a4b51709b85e82c760ce72d74?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b942602e51fa53a2d5eb57bd2e8ce5a5dd3f35a4b51709b85e82c760ce72d74?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b942602e51fa53a2d5eb57bd2e8ce5a5dd3f35a4b51709b85e82c760ce72d74?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b942602e51fa53a2d5eb57bd2e8ce5a5dd3f35a4b51709b85e82c760ce72d74?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b942602e51fa53a2d5eb57bd2e8ce5a5dd3f35a4b51709b85e82c760ce72d74?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b942602e51fa53a2d5eb57bd2e8ce5a5dd3f35a4b51709b85e82c760ce72d74?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                      className="aspect-[1.6] object-contain object-center w-full overflow-hidden"
                    />
                    <div className="text-violet-700 text-sm font-semibold leading-5 whitespace-nowrap mt-8">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="items-stretch flex justify-between gap-4 mt-3">
                      <div className="text-white text-2xl font-semibold leading-8 grow whitespace-nowrap">
                        Bill Walsh leadership lessons
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e0a1f43d3b82ec78046cf7c855c3663b5565d6e7331ccc540c85f06c0cec9d0?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                      />
                    </div>
                    <div className="text-neutral-300 text-base leading-6 mt-3">
                      Like to know the secrets of transforming a 2-14 team into
                      a 3x Super Bowl winning Dynasty?
                    </div>
                    <div className="items-stretch flex gap-2 mt-6 pr-14 max-md:pr-5">
                      <div className="text-violet-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-purple-50 grow px-2.5 py-0.5 rounded-2xl">
                        Leadership
                      </div>
                      <div className="text-indigo-900 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-slate-50 grow px-2.5 py-0.5 rounded-2xl">
                        Management
                      </div>
                      <div className="text-pink-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-pink-50 grow px-2.5 py-0.5 rounded-2xl">
                        Presentation
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6448d63980e17319d8922cc488827cedccff0d4cfedf321c6f0a3017943bec63?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6448d63980e17319d8922cc488827cedccff0d4cfedf321c6f0a3017943bec63?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6448d63980e17319d8922cc488827cedccff0d4cfedf321c6f0a3017943bec63?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6448d63980e17319d8922cc488827cedccff0d4cfedf321c6f0a3017943bec63?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6448d63980e17319d8922cc488827cedccff0d4cfedf321c6f0a3017943bec63?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6448d63980e17319d8922cc488827cedccff0d4cfedf321c6f0a3017943bec63?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6448d63980e17319d8922cc488827cedccff0d4cfedf321c6f0a3017943bec63?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6448d63980e17319d8922cc488827cedccff0d4cfedf321c6f0a3017943bec63?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                      className="aspect-[1.6] object-contain object-center w-full overflow-hidden"
                    />
                    <div className="text-violet-700 text-sm font-semibold leading-5 whitespace-nowrap mt-8">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="items-stretch flex justify-between gap-4 mt-3">
                      <div className="text-white text-2xl font-semibold leading-8 grow whitespace-nowrap">
                        PM mental models
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e0a1f43d3b82ec78046cf7c855c3663b5565d6e7331ccc540c85f06c0cec9d0?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                      />
                    </div>
                    <div className="text-neutral-300 text-base leading-6 mt-3">
                      Mental models are simple expressions of complex processes
                      or relationships.
                    </div>
                    <div className="items-stretch flex gap-2 mt-6 pr-20 max-md:pr-5">
                      <div className="text-sky-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-sky-50 aspect-[3.0416666666666665] px-2.5 py-0.5 rounded-2xl">
                        Product
                      </div>
                      <div className="text-indigo-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-indigo-50 grow px-2.5 py-0.5 rounded-2xl">
                        Research
                      </div>
                      <div className="text-orange-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-orange-50 grow px-2.5 py-0.5 rounded-2xl">
                        Frameworks
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ffda3d57925a6ece281847cbb5c62b85a15817532c9b43eef9f4c0e20859eb0b?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffda3d57925a6ece281847cbb5c62b85a15817532c9b43eef9f4c0e20859eb0b?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffda3d57925a6ece281847cbb5c62b85a15817532c9b43eef9f4c0e20859eb0b?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffda3d57925a6ece281847cbb5c62b85a15817532c9b43eef9f4c0e20859eb0b?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffda3d57925a6ece281847cbb5c62b85a15817532c9b43eef9f4c0e20859eb0b?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffda3d57925a6ece281847cbb5c62b85a15817532c9b43eef9f4c0e20859eb0b?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffda3d57925a6ece281847cbb5c62b85a15817532c9b43eef9f4c0e20859eb0b?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffda3d57925a6ece281847cbb5c62b85a15817532c9b43eef9f4c0e20859eb0b?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                      className="aspect-[1.6] object-contain object-center w-full overflow-hidden"
                    />
                    <div className="text-violet-700 text-sm font-semibold leading-5 whitespace-nowrap mt-8">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="items-stretch flex justify-between gap-4 mt-3">
                      <div className="text-white text-2xl font-semibold leading-8 grow whitespace-nowrap">
                        What is Wireframing?
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e0a1f43d3b82ec78046cf7c855c3663b5565d6e7331ccc540c85f06c0cec9d0?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                      />
                    </div>
                    <div className="text-neutral-300 text-base leading-6 mt-3">
                      Introduction to Wireframing and its Principles. Learn from
                      the best in the industry.
                    </div>
                    <div className="items-stretch flex gap-2 mt-6 pr-20 max-md:pr-5">
                      <div className="text-violet-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-purple-50 aspect-[2.7916666666666665] px-2.5 py-0.5 rounded-2xl">
                        Design
                      </div>
                      <div className="text-indigo-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-indigo-50 grow px-2.5 py-0.5 rounded-2xl">
                        Research
                      </div>
                      <div className="text-pink-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-pink-50 grow px-2.5 py-0.5 rounded-2xl">
                        Presentation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center mt-12 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b8c4e538dd89b7e3178a8ee8e895c13cc1dc3c448ef05797eb738970c5bc5a43?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8c4e538dd89b7e3178a8ee8e895c13cc1dc3c448ef05797eb738970c5bc5a43?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8c4e538dd89b7e3178a8ee8e895c13cc1dc3c448ef05797eb738970c5bc5a43?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8c4e538dd89b7e3178a8ee8e895c13cc1dc3c448ef05797eb738970c5bc5a43?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8c4e538dd89b7e3178a8ee8e895c13cc1dc3c448ef05797eb738970c5bc5a43?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8c4e538dd89b7e3178a8ee8e895c13cc1dc3c448ef05797eb738970c5bc5a43?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8c4e538dd89b7e3178a8ee8e895c13cc1dc3c448ef05797eb738970c5bc5a43?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8c4e538dd89b7e3178a8ee8e895c13cc1dc3c448ef05797eb738970c5bc5a43?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                      className="aspect-[1.6] object-contain object-center w-full overflow-hidden"
                    />
                    <div className="text-violet-700 text-sm font-semibold leading-5 whitespace-nowrap mt-8">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="items-stretch flex justify-between gap-4 mt-3">
                      <div className="text-white text-2xl font-semibold leading-8 grow shrink basis-auto">
                        How collaboration makes us better designers
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e0a1f43d3b82ec78046cf7c855c3663b5565d6e7331ccc540c85f06c0cec9d0?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full mt-1 self-start"
                      />
                    </div>
                    <div className="text-neutral-300 text-base leading-6 mt-3">
                      Collaboration can make our teams stronger, and our
                      individual designs better.
                    </div>
                    <div className="items-stretch flex gap-2 mt-6 pr-20 max-md:pr-5">
                      <div className="text-violet-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-purple-50 aspect-[2.7916666666666665] px-2.5 py-0.5 rounded-2xl">
                        Design
                      </div>
                      <div className="text-indigo-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-indigo-50 grow px-2.5 py-0.5 rounded-2xl">
                        Research
                      </div>
                      <div className="text-pink-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-pink-50 grow px-2.5 py-0.5 rounded-2xl">
                        Presentation
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ce5d13dd6a8581a022fa27b3c121cd1425709a61db823f691ca718dfd3ae3486?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5d13dd6a8581a022fa27b3c121cd1425709a61db823f691ca718dfd3ae3486?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5d13dd6a8581a022fa27b3c121cd1425709a61db823f691ca718dfd3ae3486?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5d13dd6a8581a022fa27b3c121cd1425709a61db823f691ca718dfd3ae3486?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5d13dd6a8581a022fa27b3c121cd1425709a61db823f691ca718dfd3ae3486?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5d13dd6a8581a022fa27b3c121cd1425709a61db823f691ca718dfd3ae3486?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5d13dd6a8581a022fa27b3c121cd1425709a61db823f691ca718dfd3ae3486?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5d13dd6a8581a022fa27b3c121cd1425709a61db823f691ca718dfd3ae3486?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                      className="aspect-[1.6] object-contain object-center w-full overflow-hidden"
                    />
                    <div className="text-violet-700 text-sm font-semibold leading-5 whitespace-nowrap mt-8">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="items-stretch flex justify-between gap-4 mt-3">
                      <div className="text-white text-2xl font-semibold leading-8 grow shrink basis-auto">
                        Our top 10 Javascript frameworks to use
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e0a1f43d3b82ec78046cf7c855c3663b5565d6e7331ccc540c85f06c0cec9d0?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full mt-1 self-start"
                      />
                    </div>
                    <div className="text-neutral-300 text-base leading-6 mt-3">
                      JavaScript frameworks make development easy with extensive
                      features and functionalities.
                    </div>
                    <div className="items-stretch flex gap-2 mt-6 pr-20 max-md:pr-5">
                      <div className="text-emerald-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-emerald-50 grow px-2.5 py-0.5 rounded-2xl">
                        Software Development
                      </div>
                      <div className="text-pink-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-pink-50 aspect-[2.3333333333333335] px-2.5 py-0.5 rounded-2xl">
                        Tools
                      </div>
                      <div className="text-rose-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-rose-50 aspect-[2.25] px-2.5 py-0.5 rounded-2xl">
                        SaaS
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/78846667436749e7ae20d38dbca57ed324199c650558a4ceefc99c868dd712b3?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/78846667436749e7ae20d38dbca57ed324199c650558a4ceefc99c868dd712b3?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78846667436749e7ae20d38dbca57ed324199c650558a4ceefc99c868dd712b3?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/78846667436749e7ae20d38dbca57ed324199c650558a4ceefc99c868dd712b3?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/78846667436749e7ae20d38dbca57ed324199c650558a4ceefc99c868dd712b3?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78846667436749e7ae20d38dbca57ed324199c650558a4ceefc99c868dd712b3?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/78846667436749e7ae20d38dbca57ed324199c650558a4ceefc99c868dd712b3?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/78846667436749e7ae20d38dbca57ed324199c650558a4ceefc99c868dd712b3?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                      className="aspect-[1.6] object-contain object-center w-full overflow-hidden"
                    />
                    <div className="text-violet-700 text-sm font-semibold leading-5 whitespace-nowrap mt-8">
                      Sunday , 1 Jan 2023
                    </div>
                    <div className="items-stretch flex justify-between gap-4 mt-3">
                      <div className="text-white text-2xl font-semibold leading-8 grow shrink basis-auto">
                        Podcast: Creating a better CX Community
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e0a1f43d3b82ec78046cf7c855c3663b5565d6e7331ccc540c85f06c0cec9d0?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full mt-1 self-start"
                      />
                    </div>
                    <div className="text-neutral-300 text-base leading-6 mt-3">
                      Starting a community doesn’t need to be complicated, but
                      how do you get started?
                    </div>
                    <div className="items-stretch flex gap-2 mt-6 pr-8 max-md:pr-5">
                      <div className="text-violet-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-purple-50 grow px-2.5 py-0.5 rounded-2xl">
                        Podcasts
                      </div>
                      <div className="text-indigo-900 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-slate-50 grow px-2.5 py-0.5 rounded-2xl">
                        Customer Success
                      </div>
                      <div className="text-pink-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-pink-50 grow px-2.5 py-0.5 rounded-2xl">
                        Presentation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-between items-stretch flex w-full gap-5 mt-8 pt-5 border-t-gray-200 border-t-opacity-30 border-t border-solid max-md:max-w-full max-md:flex-wrap">
              <div className="justify-center items-stretch flex gap-2 mt-2.5 self-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8180550eeef3958753676cd3b9367d118d8991d734e821caf78e499ef0ea9907?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-zinc-100 text-sm font-medium leading-5 grow whitespace-nowrap">
                  Previous
                </div>
              </div>
              <div className="items-start flex justify-between gap-5 pr-3">
                <div className="text-neutral-900 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-center bg-purple-50 self-stretch aspect-square h-10 px-4 rounded-lg">
                  1
                </div>
                <div className="text-zinc-100 text-center text-sm font-medium leading-5 self-center my-auto">
                  2
                </div>
                <div className="text-zinc-100 text-center text-sm font-medium leading-5 self-center my-auto">
                  3
                </div>
                <div className="text-zinc-100 text-center text-sm font-medium leading-5 self-center my-auto">
                  ...
                </div>
                <div className="text-zinc-100 text-center text-sm font-medium leading-5 self-center my-auto">
                  8
                </div>
                <div className="text-zinc-100 text-center text-sm font-medium leading-5 self-center my-auto">
                  9
                </div>
                <div className="text-zinc-100 text-center text-sm font-medium leading-5 self-center grow whitespace-nowrap my-auto">
                  10
                </div>
              </div>
              <div className="justify-center items-stretch flex gap-2 mt-2.5 self-start">
                <div className="text-zinc-100 text-sm font-medium leading-5">
                  Next
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a585942f727a8e7ab21b62a83eafe978b0f87ba69979eb98b76d0d5307470539?apiKey=b0a33ab379134ba2bf1dc3a80bead94e&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-slate-950 flex w-full flex-col px-16 py-8 max-md:max-w-full max-md:px-5">
        <div className="items-stretch flex gap-3.5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="text-white text-xl leading-6 grow whitespace-nowrap">
            © 2023
          </div>
          <div className="items-stretch flex gap-3.5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-xl leading-6 grow whitespace-nowrap">
              Twitter{" "}
            </div>
            <div className="text-white text-xl leading-6">LinkedIn</div>
            <div className="text-white text-xl leading-6">Email</div>
            <div className="text-white text-xl leading-6">RSS feed</div>
            <div className="text-white text-xl leading-6 grow whitespace-nowrap">
              Add to Feedly
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


