const About = () => {
  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <img
                    src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&w=640&q=75"
                    alt=""
                    sizes="(min-width: 1024px) 32rem, 20rem"
                    width={800}
                    height={800}
                    decoding="async"
                    data-nimg="1"
                    className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                  Hi, I am Samuel Pokam. I am a{" "}
                  <span className="text-pink-600">full-stack developer</span>
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                  <p>
                    I bring together my expertise in both front-end and back-end
                    technologies to create dynamic and user-friendly web
                    applications. With a passion for building scalable and
                    efficient systems, I enjoy solving complex problems and
                    implementing innovative solutions that make a difference for
                    businesses and end-users alike.
                  </p>
                  <p>
                    In my front-end work, I focus on crafting intuitive and
                    visually appealing interfaces that provide seamless user
                    experiences. I am skilled in HTML, CSS, and JavaScript
                    frameworks such as Next.js and React Native, which allow me
                    to build responsive, dynamic, and mobile-friendly web pages.
                    I also pay attention to accessibility and usability
                    standards to ensure that my designs are inclusive and easy
                    to navigate.
                  </p>
                  <p>
                    On the back-end side, I leverage my expertise in
                    technologies such as Node.js, Express.js, and MongoDB to
                    create scalable and efficient web applications. I have
                    experience in building RESTful APIs and working with
                    databases to store and retrieve data. I also pay attention
                    to security and best practices to ensure that my
                    applications are safe from potential attacks. With a focus
                    on creating well-structured and maintainable code, I strive
                    to create back-end systems that enable seamless
                    communication with the front-end and provide a smooth user
                    experience.
                  </p>
                  <p>
                    In short, I am a full stack web developer who is passionate
                    about delivering high-quality and user-centric web
                    applications. Whether it's working on a new project from
                    scratch or enhancing an existing one, I am always looking
                    for ways to push the boundaries of what's possible with web
                    development.
                  </p>
                </div>
              </div>
              <div className="lg:pl-20">
                <ul role="list">
                  <li className="flex">
                    <a
                      href="#"
                      className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-600 dark:text-zinc-200 dark:hover:text-teal-500"
                    >
                      Follow on Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;