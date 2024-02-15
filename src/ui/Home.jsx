function Home() {
  console.log(process.env.TESTO);
  const greetPerson = process.env.TESTO;
  console.log(`Say hello: ${greetPerson}`);
  return (
    <div className="p-5">
      <h1>Home</h1>
      <p>{process.env.TESTO}</p>
      <p>{greetPerson ? greetPerson : "No Greet Person"}</p>
    </div>
  );
}

export default Home;
