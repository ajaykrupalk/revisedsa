import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Menu from "./Menu";
import { PanelLeftOpen } from "lucide-react"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MenuSheet() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                    <PanelLeftOpen className="h-4 w-4" />
                </SheetTrigger>
                <SheetContent side="left" className="w-60">
                    <SheetHeader>
                        <SheetTitle>
                            <Link to="/">
                                <h1 className="text-left text-xl">revise.</h1>
                            </Link>
                        </SheetTitle>
                    </SheetHeader>
                    <Menu onItemClick={() => setOpen(false)}/>
                </SheetContent>
            </Sheet>
        </>
    )
}
