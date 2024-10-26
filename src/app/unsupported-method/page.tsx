export default async function Home() {
  const res = await fetch("http://localhost:3000/api/unsupported-method");
  const text = await res.text();

  return (
    <div>
      <h1>Message from Hello API</h1>
      <p>{text}</p>
    </div>
  );
}
