function Home() {
  console.log(process.env.VITE_TESTO);
  const greetPerson = process.env.VITE_TESTO;
  console.log(`Say hello: ${greetPerson}`);
  return (
    <div className="p-5">
      <h1>Home</h1>
      <p>{process.env.VITE_TESTO}</p>
      <p>{greetPerson ? greetPerson : "No Greet Person"}</p>
    </div>
  );
}

export default Home;
