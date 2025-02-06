import { InputField } from "@/components/Inputs/InputField";
import React, { ReactElement } from "react";
import GitHub from "@/assets/github.svg";
import Google from "@/assets/google.svg";
import Image from "next/image";
import Email from "@/assets/email.svg";
import Lock from "@/assets/lock.svg";
import { GroupFields } from "@/components/Inputs/GroupFIeldsCredentials";
import CoinLupe from "@/assets/lupe-coin.jpeg";
export default function Login(): ReactElement {
  return (
    <React.Fragment>
      <section className="bg-background-secondary    max-[900px]:w-8/12  max-[541px]:w-10/12  md:w-[26rem]   rounded-sm p-4 py-6 mx-auto ">
        <article className="flex items-center flex-col">
          <strong>
            <h1 className="text-2xl">Bem-vindo de volta</h1>
          </strong>
          <p className="text-foreground-secondary">
            Login to your Acme Inc account
          </p>
        </article>
        <article className="mt-5">
          <GroupFields login={true} />
          <div className="relative flex   items-center justify-center mt-2 before: gap-2">
            <span className="bg-foreground-secondary absolute left-0 top-1/2 h-[0.011rem] max-[362px]:w-1/6  w-1/4"></span>
            <p className="text-foreground-secondary">Or continue with</p>
            <span className="bg-foreground-secondary absolute right-0 top-1/2 h-[0.011rem] max-[362px]:w-1/6 w-1/4 "></span>
          </div>
          <div className="grid grid-cols-2 max-[373px]:grid-cols-1 items-center gap-4 mx-auto max-[439px]:p-0 justify-items-center mt-6 ">
            <button className="border-sm  border-background-elevated py-1.5 w-11/12 rounded-md flex justify-center items-center gap-4 hover:bg-background-tertiary transition-all duration-300">
              <Image src={Google} alt="Google icon"></Image>
              Google
            </button>
            <button
              className={`border-sm  border-background-elevated py-1.5 w-11/12 rounded-md flex justify-center items-center gap-4 hover:bg-background-tertiary transition-all duration-300`}
            >
              <Image src={GitHub} alt="Google icon"></Image>
              GitHub
            </button>
          </div>
          <div className="relative flex  flex-col items-center justify-center mt-4">
            <p className="text-foreground-secondary text-sm">
              Don't have an account? Sign up
            </p>
          </div>
        </article>
      </section>
    </React.Fragment>
  );
}
