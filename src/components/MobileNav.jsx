import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NavbarLinks } from "@/constants";
import { FaBars } from "react-icons/fa6";

const MobileNav = () => {
  const pathname = "/";

  return (
    <section className="sm:hidden">
      <div className="flex flex-col">
        <Sheet>
          <SheetTrigger asChild>
            <FaBars size={25} />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="border-none outline-none bg-dark-2 text-primary p-0"
          >
            <div className="flex flex-col py-6">
              <h2 className="text-primary text-4xl ml-4 magmawave">NIRANJAN</h2>
              <hr className="mx-5 mt-6 border border-primary" />
              <div className="flex flex-col h-max gap-2 px-3 pt-10">
                {NavbarLinks.map((obj, key) => {
                  const isActive =
                    pathname === obj.route ||
                    (obj.route === "#home" && pathname === "/");
                  console.log(pathname, isActive);
                  return (
                    <a
                      key={key}
                      href={obj.route}
                      className="focus:outline-none focus:ring-0 transition-all duration-300"
                    >
                      <SheetClose className="w-full" asChild>
                        <div
                          className={cn(
                            "w-full flex gap-3 items-center p-4 pr-10",
                            { "bg-dark-1 shadow-md": isActive }
                          )}
                        >
                          <h1 className="text-lg font-bold">{obj.title}</h1>
                        </div>
                      </SheetClose>
                    </a>
                  );
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export default MobileNav;
