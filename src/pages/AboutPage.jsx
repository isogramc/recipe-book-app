import PersonComponent from "./../components/PersonComponent";

function AboutPage() {
  return (
    <div className="about-page">
      <PersonComponent
        image="https://api.dicebear.com/6.x/adventurer/svg?seed=Trix&face=variant05&hair=short05&eyes=variant14&mouth=variant13&skinColor=variant01"
        fullName="Trix Mostert"
        githubLink="https://github.com/isogramc"
        linkedInLink="https://www.linkedin.com/in/trixmostert"
      />
      <PersonComponent
        image="https://api.dicebear.com/6.x/adventurer/svg?seed=Brunella&face=variant06&hair=long07&eyes=variant21&mouth=variant12&skinColor=variant02"
        fullName="Brunella Carvalho"
        githubLink="https://github.com/brunellanmcarvalho1"
        linkedInLink="https://www.linkedin.com/in/brunella-neves-mangaravite-carvalho-11118a15a"
      />
    </div>
  );
}

export default AboutPage;
