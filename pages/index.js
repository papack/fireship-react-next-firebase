import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.error("hello toast!")}>Toast Me</button>
    </div>
  );
}
