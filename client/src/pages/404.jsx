import Container from "../components/Container";

function NotFoundPage() {
  return (
    <Container className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center space-x-8">
        <img
          src="https://www.svgrepo.com/show/143908/number-four.svg"
          alt=""
          className="w-1/3 bg-[#4e725e]"
        />
        <img
          src="https://dejpknyizje2n.cloudfront.net/media/carstickers/versions/smiling-cartoon-zombie-circle-sticker-uf0f3-x450.png"
          alt=""
          className="w-1/3"
        />
        <img
          src="https://www.svgrepo.com/show/143908/number-four.svg"
          alt=""
          className="w-1/3 bg-[#4e725e]"
        />
      </div>
      <p className="text-center font-bold mt-10 text-5xl">Page non trouvée</p>

      <a
        href="/"
        className="mt-8 px-6 py-3 bg-primaryColor text-white font-semibold rounded-lg hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Retour à l'accueil
      </a>
    </Container>
  );
}

export default NotFoundPage;
