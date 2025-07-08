'use client'
import React, { useEffect, useState } from "react";
import JobCard from "./components/JobCard";
import { motion } from 'framer-motion';

interface JobAPI {
  id: number;
  documentId: string;
  attributes: {
    Title: string;
    Company: string;
    Location: string;
    Salary: string;
    URL?: string;
    Long_Description: string;
    Type: string;
  };
}

export default function Home() {
  const [jobs, setJobs] = useState<JobAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const jobTypes = [
    { value: 'Full-time', label: 'دوام كامل' },
    { value: 'Contract', label: 'عقد عمل / عمل بعقد' },
    { value: 'COOP', label: 'تدريب تعاوني' },
    { value: 'Internship', label: 'تدريب (صيفي أو ميداني)' },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/jobs");
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data.data || []);
      } catch (err: unknown) {
        setError((err as Error).message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="items-center pb-20 gap-16" dir="rtl">
      <section id="jobs" className="py-20 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {/* {t('sections.featured_jobs')} */}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  اكتشف أفضل الفرص المتاحة للخريجين الجدد في أكبر الشركات السعودية
                </p>
              </div>
            </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 w-full max-w-3xl mx-auto">
            {jobTypes.map((type) => (
              <button
                key={type.value}
                className={`px-4 py-2 rounded-full font-bold border ${selectedType === type.value ? 'bg-green-600 text-white' : 'bg-white text-green-700 border-green-600'} transition min-w-[120px]`}
                onClick={() => setSelectedType(type.value)}
              >
                {type.label}
              </button>
            ))}
            <button
              className={`px-4 py-2 rounded-full font-bold border ${selectedType === null ? 'bg-green-600 text-white' : 'bg-white text-green-700 border-green-600'} transition min-w-[120px]`}
              onClick={() => setSelectedType(null)}
            >
              الكل
            </button>
          </div>

          {loading && <div className="text-center">جاري تحميل الوظائف...</div>}
          {error && <div className="text-center text-red-500">{error}</div>}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
                {jobs
                  .filter(job => !selectedType || job.Type === selectedType)
                  .map((job) => (
                    <JobCard
                      key={job.id}
                      id={job.id}
                      title={job.Title}
                      company={job.Company}
                      location={job.Location}
                      salary={job.Salary}
                      url={job.URL}
                      long_description={job.Long_Description}
                    />
                  ))}
              </div>
            </motion.div>

          <div className="text-center mt-12">
            <button className="text-green-600 hover:text-green-700 font-semibold text-lg transition-colors hover:underline">
              عرض جميع الوظائف ←
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
