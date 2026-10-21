import React from 'react';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function SearchFilterBar({ onSearch, onFilter, onSort, categories }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input 
          placeholder="Search products..." 
          className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      
      <div className="flex gap-3">
        <Select onValueChange={onFilter} defaultValue="all">
          <SelectTrigger className="w-[180px] bg-white border-gray-200 text-gray-700 font-medium">
            <Filter className="w-4 h-4 mr-2 text-gray-500" />
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="font-medium">All Categories</SelectItem>
            {categories.map(cat => (
              <SelectItem key={cat.id} value={cat.id}>{cat.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={onSort} defaultValue="popularity">
          <SelectTrigger className="w-[180px] bg-gray-50 border-gray-200">
            <ArrowUpDown className="w-4 h-4 mr-2 text-gray-500" />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popularity">Most Popular</SelectItem>
            <SelectItem value="newest">Newest Release</SelectItem>
            <SelectItem value="name">Name (A-Z)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}