function Home() {
  console.log(import.meta.env.TESTO);
  const greetPerson = import.meta.env.TESTO;
  console.log(`Say hello: ${greetPerson}`);
  return (
    <div>
      <h1>Home</h1>
      <p>{import.meta.env.VITE_TESTO}</p>
      <p>{import.meta.env.VITE_SOME_KEY}</p>
      <p>{greetPerson ? greetPerson : "No Greet Person"}</p>
    </div>
  );
}

export default Home;
