import PersonComponent from "./../components/PersonComponent"
function AboutPage(){
    return (
        <div className="about-page">
            <PersonComponent props={{image: "https://avatars.githubusercontent.com/u/2439665?v=4", fullName: "Trix Mostert", githubLink: "https://github.com/isogramc", linkedInLink:"www.linkedin.com/in/trixmostert"}}/>
            <PersonComponent props={{image: "https://avatars.githubusercontent.com/u/2439665?v=4", fullName: "Brunella", githubLink: "https://github.com/https://github.com/brunellanmcarvalho1", linkedInLink:"https://www.linkedin.com/in/brunella-neves-mangaravite-carvalho-11118a15a"}}/>
        </div>
    )
}
export default AboutPage;