import { useRouter } from "next/router";
import Link from "next/link";

const CoffeStore = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Coffe Store page {router.query.id}</h1>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
}

export default CoffeStore;
