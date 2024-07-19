
import { 
  Sheet,
SheetContent,
SheetTrigger,
 } from "@/components/ui/sheet"
 import { AlignJustify } from "lucide-react"


const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>Content</SheetContent>
    </Sheet>
  )
}

export default MobileNav