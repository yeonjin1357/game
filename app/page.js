import Map from "@/components/map/map";
import classes from "./page.module.css";

export default function Home() {
  return (
    <main className={classes.main}>
      <Map></Map>
    </main>
  );
}
