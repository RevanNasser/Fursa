export default function JobOpportunities() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-3xl" dir="rtl">
      <h1 className="text-3xl font-bold text-green-800 mb-6">فرص وظيفية</h1>
      <p className="text-lg text-gray-700 mb-4">
        هنا ستجد أحدث الفرص الوظيفية المتاحة للخريجين الجدد في كبرى الشركات السعودية. يمكنك تصفح الوظائف، استخدام التصفية حسب النوع، والتقديم مباشرة من خلال المنصة.
      </p>
      <ul className="list-disc pr-6 text-gray-800 space-y-2">
        <li>تصفح جميع الوظائف المتاحة بسهولة.</li>
        <li>استخدم التصفية للبحث عن الوظائف المناسبة لك.</li>
        <li>تفاصيل كل وظيفة متوفرة مع إمكانية التقديم المباشر.</li>
        <li>تحديث مستمر للفرص الجديدة.</li>
      </ul>
      <link href="/" className="inline-block mt-6 px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition">العودة للصفحة الرئيسية</link>
    </div>
  );
} 