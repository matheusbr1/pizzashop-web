import { ArrowRight, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";

import { OrderDetails } from "./order-details";

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild >
            <Button variant='outline' size='xs' >
              <Search className="h-3 w-3" />
              <span className="sr-only" >Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium" >
        s21sd21fsd21fsd1
      </TableCell>
      <TableCell className="text-muted-foreground" >
        há 15 minutos
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2" >
          <span className="h-2 w-2 rounded bg-slate-400" />
          <span className="font-medium text-muted-foreground" >Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium" >
        Matheus Baron
      </TableCell>
      <TableCell className="font-medium" >
        R$ 149,90
      </TableCell>
      <TableCell>
        <Button variant='outline' size='xs' >
          <ArrowRight className="h-3 w-3 mr-2" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant='ghost' size='xs' >
          <X className="h-3 w-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}