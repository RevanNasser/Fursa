import { marked } from 'marked';
import { notFound } from 'next/navigation';

export default async function JobDetails({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:1337/api/jobs/${params.id}`);
  if (!res.ok) return notFound();
  const data = await res.json();
  const job = data.data;

  if (!job) return notFound();

  return (
    <div className="container mx-auto py-10 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4 text-green-800">{job.Title}</h1>
      <p className="mb-2"><span className="font-semibold">الشركة:</span> {job.Company}</p>
      <p className="mb-2"><span className="font-semibold">الموقع:</span> {job.Location}</p>
      <p className="mb-2"><span className="font-semibold">الراتب:</span> {job.Salary}</p>
      <div className="mb-4">
        <span className="font-semibold">الوصف الوظيفي:</span>
        <div className="prose prose-green max-w-none" dir="rtl" dangerouslySetInnerHTML={{ __html: marked(job.Long_Description || '') }} />
      </div>
      {job.URL && (
        <a href={job.URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition">
          التقديم على الوظيفة
        </a>
      )}
    </div>
  );
} 