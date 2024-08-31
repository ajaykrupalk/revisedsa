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

export default function MenuSheet() {
    return (
        <>
            <Sheet>
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
                    <Menu />
                </SheetContent>
            </Sheet>
        </>
    )
}
