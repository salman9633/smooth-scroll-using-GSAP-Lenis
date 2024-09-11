import ImageComponent from "@/components/ImageComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-32 flex flex-col w-full items-center justify-center">
     <ImageComponent/>
    </div>
  );
}
