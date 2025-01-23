import PersonComponent from "./../components/PersonComponent";

function AboutPage() {
  const image1 = "https://res.cloudinary.com/dwyipecoa/image/upload/v1737391815/th-3544425054_iifsql.jpg";
  const image2 = "https://res.cloudinary.com/dwyipecoa/image/upload/v1737391814/th-2890569446_dzow28.jpg";
  return (
    <div>
    <div className="about-page-components">
      <PersonComponent
        image="https://api.dicebear.com/6.x/adventurer/svg?seed=Trix&face=variant05&hair=short05&eyes=variant14&mouth=variant13&skinColor=variant01"
        placeholderImg={image1}
        fullName="Trix Mostert"
        githubLink="https://github.com/isogramc"
        linkedInLink="https://www.linkedin.com/in/trixmostert"
      />
      <PersonComponent
        image="https://api.dicebear.com/6.x/adventurer/svg?seed=Brunella&face=variant06&hair=long07&eyes=variant21&mouth=variant12&skinColor=variant02"
        placeholderImg={image2}
        fullName="Brunella Carvalho"
        githubLink="https://github.com/brunellanmcarvalho1"
        linkedInLink="https://www.linkedin.com/in/brunella-neves-mangaravite-carvalho-11118a15a"
      />
    </div>
      <div className="about-page-text">
        <h1>Welcome to our recipe book!</h1><br/>
        <p>We are just two students trying to collaborate to make our lives and the lives of others a bit easier.</p>
        <p>We had this great idea to share recipes with each other online and to allow us to do some basic meal planning.</p> 
        <p>We invite you to use these tools also to enjoy your meal preperation more.</p>
        <p>While using this recipe book, you can do the same here and online.</p>
        <p>The concept is a simple CRUD app for managing recipes. Images for your recipes may be stored in the cloud!</p>
        <p>Enjoy image upload with Cloudinary (thus also being able to upload your own images), or link to images you like.</p>
        <p>We would love to hear from our fans! Please connect with us on LinkedIn and Github</p>
      </div>
    </div>
  );
}

export default AboutPage;
