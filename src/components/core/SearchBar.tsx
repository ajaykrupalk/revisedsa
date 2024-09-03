'use client'
type MenuItem = {
    [key: string]: {
        [subKey: string]: {
            path: string;
        }
    }
}

import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import { StickyNote } from 'lucide-react'
import Menu from "../../assets/MenuItems.json";
import { Link } from "react-router-dom";

export default function SearchDialog() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return (
        <div className="w-32 sm:w-full max-w-sm mx-auto">
            <button className="w-full flex justify-between rounded-md py-1 pl-3 pr-1 text-slate-500 border border-slate-200 bg-slate-50/30 hover:text-slate-900" onClick={() => setOpen(true)}>
                <span className="mr-8 font-normal text-[13px] truncate">Search for documentation...</span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-normal text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="p-0">
                    <Command>
                        <CommandInput placeholder="Type a command or search..." />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            {Object.keys(Menu as MenuItem).map((section, index) => (
                                <>
                                    <CommandGroup heading={section} key={index}>
                                        {Object.keys((Menu as MenuItem)[section]).map((subSection, subIndex) => (
                                            <Link to={(Menu as MenuItem)[section][subSection].path} onClick={() => setOpen(false)}>
                                                <CommandItem key={subIndex} className='cursor-pointer'>
                                                    <StickyNote className="mr-2 h-4 w-4" />
                                                    <span>{subSection}</span>
                                                </CommandItem>
                                            </Link>
                                        ))}
                                    </CommandGroup>
                                    <CommandSeparator />
                                </>
                            ))}
                        </CommandList>
                    </Command>
                </DialogContent>
            </Dialog>
        </div>
    )
}