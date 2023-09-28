function About() {
  return (
    <div
      id="about"
      className="  mx-auto  flex items-center gap-[200px] bg-gray-800  py-[240px] pl-[230px] "
    >
      <div className="flex max-w-lg flex-col items-center justify-end gap-12 pt-[40px] leading-8">
        <div className=" ">
          <span className="  font-robotoMono text-[30px]">Hello,</span>
          <p className="py-[5px] pb-[20px] font-robotoMono text-[30px] font-bold">
            I'm Pragadeesh{' '}
          </p>
          <p>
            <span className="text-xl font-bold text-orange-400">
              A Fullstack developer
            </span>{' '}
            based in US and currently pursuing my masters in computer science
            from Indiana University Bloomington. I'm a competitive individual
            who like to take up new challenges and thrive in them. I have solid
            fundation in HTML,CSS, Javascript, React, Node,js and Express. In my
            free time, I like to travel and explore new places and play music.
          </p>
        </div>

        <a
          className="self-start rounded-xl bg-orange-500 px-6 py-2"
          href="#contact"
        >
          Connect with me
        </a>
      </div>
      <div className="flex items-center justify-center pl-[80px] ">
        <img
          src="../background-imgs/bg-2.jpg"
          alt="User"
          className="h-[300px] w-[300px] rounded-full"
        />
      </div>
    </div>
  );
}

export default About;
