'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { closeDialog, dialogModalSelector } from "@/redux/modules/dialogModal/dialogModalSlice";
import { useDispatch, useSelector } from "react-redux";
import Middle from "../layouts/Middle";
import { BadgeAlert, BadgeCheck, BadgeInfo, CheckIcon, CrossIcon } from "lucide-react";

export default function AlertDialogModal() {
    const dialogModal = useSelector(dialogModalSelector);
    const dispatch = useDispatch();

    //countdown
    if (dialogModal.open && dialogModal.countDown) {
        setTimeout(() => {
            dispatch(closeDialog());
        }, dialogModal.countDown);
    }

    return (
        <AlertDialog open={dialogModal.open} onOpenChange={(open) => { !open && dispatch(closeDialog()) }}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <Middle X className="w-full h-full">
                        {
                            dialogModal.status === "success" ? (
                                <BadgeCheck className="w-10 h-10 text-Success" />
                            ) : dialogModal.status === "error" ? (
                                <BadgeAlert className="w-10 h-10 text-Danger" />
                            ) : dialogModal.status === "warning" ? (
                                <BadgeAlert className="w-10 h-10 text-Warning" />
                            ) : dialogModal.status === "info" ? (
                                <BadgeInfo className="w-10 h-10 text-card-foreground" />
                            ) : (
                                <></>
                            )
                        }

                    </Middle>
                    <AlertDialogTitle>
                        <Middle X className="w-full h-full">
                            {dialogModal.title}
                        </Middle>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <Middle X className="w-full h-full">
                            {dialogModal.content}
                        </Middle>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Middle X className="w-full h-full">
                        {
                            dialogModal.cancelText && <AlertDialogCancel>{dialogModal.cancelText}</AlertDialogCancel>
                        }
                        {
                            dialogModal.confirmText && <AlertDialogAction onClick={dialogModal.onConfirm}>{dialogModal.confirmText}</AlertDialogAction>

                        }
                    </Middle>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}