// app/posts/columns.ts
"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Post = {
    id: number;
    formData: string;
    aiResponse: string | null;
    templateSlug: string;
    createdBy: string;
    createdAt: string | null;
};

export const columns: ColumnDef<Post>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "formData",
        header: "FormData",
    },
    {
        accessorKey: "aiResponse",
        header: "AI Response",
    },
    // {
    //     accessorKey: "templateSlug",
    //     header: "templateSlug",
    // },
    {
        accessorKey: "createdBy",
        header: "createdBy",
    },
    {
        accessorKey: "createdAt",
        header: "createdAt",
    },
];
