import React from "react";
import { SignedOut,SignInButton,SignUpButton,UserButton,SignedIn} from "@clerk/nextjs";
const Header=()=>{
    return <div>
        <SignedOut>
              <SignInButton />
              <SignUpButton>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    </div>;
};

export default Header;