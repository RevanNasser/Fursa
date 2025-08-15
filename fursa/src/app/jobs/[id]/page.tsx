import { marked } from 'marked';
import { notFound } from 'next/navigation';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardFooter, CardHeader } from '../../components/ui/Card';
import { Briefcase } from 'lucide-react';
import Link from 'next/link';

interface JobData {
  id: number;
  documentId: string;
  Title: string;
  Company: string;
  Location: string;
  Salary: string;
  URL?: string;
  Long_Description?: string;
  Type: string;
  publishedAt: string;
  updatedAt: string;
}

export default async function JobDetails({ params }: { params: { id: string } }) {
  // First, get all jobs to find the one with matching documentId
  const res = await fetch("https://jolly-wealth-13247160de.strapiapp.com/api/jobs");
  if (!res.ok) return notFound();
  const data = await res.json();
  const jobs = data.data || [];
  
  // Find the job by documentId (which is what we're using as the route parameter)
  const job = jobs.find((job: JobData) => job.documentId === params.id);
  
  if (!job) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-3xl">
        {/* Job Card - Same style as jobs list but larger */}
        <Card className="border-0 shadow-2xl bg-white rounded-2xl p-0 text-right" dir="rtl">
          <CardHeader className="pb-2 flex flex-row items-center gap-4 border-b border-green-200 bg-green-100 rounded-t-2xl">
            <div className="w-16 h-16 bg-green-200 rounded-lg flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-green-700" />
            </div>
            <div>
              <h3 className="font-bold text-2xl text-green-900 mb-1">{job.Title}</h3>
              <p className="text-green-700 font-medium text-lg">{job.Company}</p>
            </div>
          </CardHeader>

          <CardContent className="py-6 px-8 space-y-4">
            <div className="flex items-center text-lg text-gray-800">
              <span className="font-semibold ml-3">الموقع:</span>
              <span className="text-lg">{job.Location}</span>
            </div>
            <div className="flex items-center text-lg text-gray-800">
              <span className="font-semibold ml-3">الراتب:</span>
              <span className="font-bold text-green-900 text-lg">{job.Salary}</span>
            </div>
            <div className="flex items-center text-lg text-gray-800">
              <span className="font-semibold ml-3">نوع الوظيفة:</span>
              <span className="text-lg">{job.Type}</span>
            </div>
            
            {/* Job Description */}
            {job.Long_Description && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-xl text-gray-900 mb-4">الوصف الوظيفي:</h4>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" dir="rtl">
                  <div dangerouslySetInnerHTML={{ __html: marked(job.Long_Description) }} />
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="pt-4 border-t border-gray-100 bg-white rounded-b-2xl flex flex-row-reverse gap-3 p-6">
            {job.URL ? (
              <Button 
                size="sm" 
                className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold border-0"
                asChild
              >
                <a href={job.URL} target="_blank" rel="noopener noreferrer">التقديم على الوظيفة</a>
              </Button>
            ) : (
              <Button 
                size="sm" 
                className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold border-0"
              >
                تقدم الآن
              </Button>
            )}
            
            <Button 
              variant="outline"
              size="sm" 
              className="flex-1 font-bold border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800"
              asChild
            >
              <Link href="/">العودة للصفحة الرئيسية</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
} 