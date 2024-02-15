function Home() {
  console.log(import.meta.env.TESTO);
  const greetPerson = import.meta.env.VITE_TESTO;
  console.log(`Say hello: ${greetPerson}`);
  return (
    <div className="p-5">
      <h1>Home</h1>
      <p>{import.meta.env.VITE_TESTO}</p>
      <p>{greetPerson ? greetPerson : "No Greet Person"}</p>
    </div>
  );
}

export default Home;
