import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons-invoice';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vulernability Database',
};

export default function Page() {
  return (

    <div className="w-full">
      <h1 className={`${lusitana.className} text-2xl`}>Vulnerability DB Page</h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search vulnerability database..." />
        <CreateInvoice label="Vulnerability" />
      </div>
    </div >
  );
}