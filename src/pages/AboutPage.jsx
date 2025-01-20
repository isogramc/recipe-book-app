import { center } from "@cloudinary/url-gen/qualifiers/textAlignment";
import PersonComponent from "./../components/PersonComponent";

function AboutPage() {
  return (
    <div>
    <div className="about-page">
      <PersonComponent
        image="https://api.dicebear.com/6.x/adventurer/svg?seed=Trix&face=variant05&hair=short05&eyes=variant14&mouth=variant13&skinColor=variant01"
        placeholderImg="th-3544425054_iifsql.jpg"
        fullName="Trix Mostert"
        githubLink="https://github.com/isogramc"
        linkedInLink="https://www.linkedin.com/in/trixmostert"
      />
      <PersonComponent
        image="https://api.dicebear.com/6.x/adventurer/svg?seed=Brunella&face=variant06&hair=long07&eyes=variant21&mouth=variant12&skinColor=variant02"
        placeholderImg="th-2890569446_dzow28.jpg"
        fullName="Brunella Carvalho"
        githubLink="https://github.com/brunellanmcarvalho1"
        linkedInLink="https://www.linkedin.com/in/brunella-neves-mangaravite-carvalho-11118a15a"
      />
    </div>
      <div style={{display: 'flex', flexDirection: "column", justifyContent: "center", marginLeft: '300px', marginTop: '20px'}}>
        <h1>Welcome to our recipe book!</h1><br/>
        <p>We are just two students trying to collaborate to make life a bit easier.</p>
        <p>We had this great idea to share recipes with each other online and to allow us to do some basic meal planning.</p>
        <p>While using this recipe book, you can do the same here and online.</p>
        <p>The concept is a simple CRUD app for managing recipes. All images for our recipes are stored in the cloud! (See image upload)</p>
        <p>Please connect with us on LinkedIn and Github</p>
      </div>
     
    </div>
  );
}

export default AboutPage;
