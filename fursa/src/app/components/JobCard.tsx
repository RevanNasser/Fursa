import { Button } from './ui/Button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/Card';
import { Briefcase } from 'lucide-react';
import Link from 'next/link';

interface JobCardProps {
  id: number;
  documentId: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  url?: string;
  long_description?: string;
}

const JobCard = ({ id, documentId, title, company, location, salary, url, long_description }: JobCardProps) => {
  return (
    <Card className="group transition-all duration-300 border-0 shadow-2xl bg-white rounded-2xl p-0 text-right" dir="rtl">
      <CardHeader className="pb-2 flex flex-row items-center gap-4 border-b border-green-200 bg-green-100 rounded-t-2xl">
        <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-green-700" />
        </div>
        <div>
          <h3 className="font-bold text-xl text-green-900 mb-1">{title}</h3>
          <p className="text-green-700 font-medium text-base">{company}</p>
        </div>
      </CardHeader>

      <CardContent className="py-4 px-6 space-y-3">
        <div className="flex items-center text-base text-gray-800">
          <span className="font-semibold ml-2">الموقع:</span>
          <span>{location}</span>
        </div>
        <div className="flex items-center text-base text-gray-800">
          <span className="font-semibold ml-2">الراتب:</span>
            <span className="font-bold text-green-900">{salary}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-2 border-t border-gray-100 bg-white rounded-b-2xl flex flex-row-reverse gap-2">
        <Button 
          size="sm" 
          className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold border-0"
          asChild
        >
          <Link href={`/jobs/${documentId}`}>تفاصيل الوظيفة</Link>
        </Button>
        {url ? (
          <Button 
            variant="outline"
            size="sm" 
            className="flex-1 font-bold border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800"
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer">تقدم الآن</a>
          </Button>
        ) : (
          <Button 
            variant="outline"
            size="sm" 
            className="flex-1 font-bold border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800"
          >
            تقدم الآن
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default JobCard;