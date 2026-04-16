import React from 'react';

interface PageProps {
  title: string;
  publishedDate?: string;
  children: React.ReactNode;
}

export const ContentPage = ({ title, publishedDate, children }: PageProps) => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-8 border-b-2 border-orange-gov/20 pb-4">
        <h2 className="text-3xl font-bold text-blue-gov mb-2">{title}</h2>
        {/* {publishedDate && (
          <p className="text-sm text-gray-500 font-bold">प्रकाशित दिनांक: {publishedDate}</p>
        )} */}
      </div>
      <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export const Introduction = () => (
  <ContentPage title="प्रस्तावना" publishedDate="१५ मार्च २०२४">
    <p className="mb-4">
      संगमनेर हे महाराष्ट्र राज्यातील अहिल्यानगर जिल्ह्यातील एक महत्त्वाचे शहर व तालुक्याचे मुख्यालय आहे. हे शहर प्रवरा नदीच्या काठावर वसलेले असून ते अहिल्यानगर जिल्ह्यातील प्रमुख व्यापारी व औद्योगिक केंद्र म्हणून ओळखले जाते.
    </p>

    <p className="mb-4">
      संगमनेर हे नाव तीन नद्यांच्या संगमावरून पडले आहे. प्रवरा, म्हाळुंगी व अढळा या नद्यांचा संगम येथे होत असल्यामुळे या शहराला ‘संगमनेर’ असे नाव देण्यात आले आहे.
    </p>

    <p className="mb-4">
      संगमनेर हे शिक्षण, व्यापार व उद्योग क्षेत्रात विकसित झालेले शहर असून येथे वस्त्र, साखर व इतर उद्योगांचे मोठे जाळे आहे. तसेच हे शहर जिल्ह्यातील प्रमुख बाजारपेठ म्हणूनही प्रसिद्ध आहे.
    </p>

    <p>
      भौगोलिक दृष्ट्या संगमनेर हे पुणे, नाशिक, मुंबई व औरंगाबाद या शहरांच्या मध्यभागी स्थित असल्यामुळे वाहतूक व व्यापारासाठी अत्यंत महत्त्वाचे केंद्र मानले जाते.
    </p>
  </ContentPage>
);

export const VisionMission = () => (
  <ContentPage title="दृष्टी आणि ध्येय" publishedDate="१५ मार्च २०२४">

    <h2 className="text-xl font-bold mb-4">दृष्टी आणि ध्येय</h2>

    <ul className="list-disc pl-6 space-y-2 mb-8">
      <li>
       पंचायत समिती संगमनेर या कार्यालयामार्फत ग्रामीण भागातील नागरिकांसाठी मूलभूत सुविधा उपलब्ध करणे तसेच स्वच्छ सुंदर हरित ग्राम निर्माण करण्यासाठी विविध उपक्रम राबवणे.
      </li>

      <li>
        महाराष्ट्र राज्य ग्रामीण जीवनोन्नती अभियानाच्या माध्यमातून ग्रामीण भागातील महिलांचे स्थापित बचत गटांना तालुक्यातील बँकांच्या समन्वयाने कर्जपुरवठा करणे व महिला बचत गटांनी निर्माण केलेल्या विविध वस्तू साहित्य अन्नपदार्थ यांना बाजारपेठ उपलब्ध करून देणे महिलांची आर्थिक सामाजिक कौटुंबिक सक्षमीकरण करणे.
      </li>

      <li>
       विविध आवास योजनांच्या माध्यमातून घरकुल बांधकाम इतर सुविधा उपलब्ध करून देणे.
      </li>

      {/* <li>
        प्रशिक्षणातून विकास कार्यक्रमांतर्गत लोक प्रतिनिधींचे सक्षमीकरणाद्वारे पंचायती राज व्यवस्था बळकट करणे.
      </li> */}
    </ul>

  </ContentPage>
);

export const ObjectivesFunctions = () => (
  <ContentPage title="उद्दिष्टे आणि कार्ये" publishedDate="१५ मार्च २०२४">

    <ul className="list-disc pl-6 space-y-3 mb-8 leading-relaxed text-gray-800">

      <li>
        पंचायत समिती संगमनेर अंतर्गत ग्रामीण भागामध्ये मूलभूत सुविधा उपलब्ध करून देणे व नागरिकांचे जीवनमान उंचावणे.
      </li>

      <li>
        स्वच्छ, सुंदर व हरित ग्राम निर्माण करण्यासाठी विविध विकासात्मक उपक्रम राबविणे.
      </li>

      <li>
        ग्रामीण भागातील नागरिकांना शासकीय योजनांचा लाभ प्रभावीपणे मिळवून देणे.
      </li>

      <li>
        महिलांचे व बचत गटांचे सक्षमीकरण करून आर्थिक व सामाजिक विकास साधणे.
      </li>

      <li>
        विविध शासकीय योजना (घरकुल, पाणीपुरवठा, आरोग्य, शिक्षण) यांची अंमलबजावणी करणे.
      </li>

      <li>
        महाराष्ट्र राज्य ग्रामीण जीवनोन्नती अभियान (MSRLM) अंतर्गत बचत गटांना प्रोत्साहन व मार्गदर्शन करणे.
      </li>

      <li>
        ग्रामपंचायतींचे समन्वय व देखरेख करून विकास कामांची प्रभावी अंमलबजावणी करणे.
      </li>

      <li>
        आरोग्य, स्वच्छता व शिक्षण क्षेत्रातील उपक्रमांचे नियोजन व अंमलबजावणी करणे.
      </li>

      <li>
        प्रशिक्षण व विकास कार्यक्रमांद्वारे लोकप्रतिनिधी व कर्मचाऱ्यांचे सक्षमीकरण करणे.
      </li>

    </ul>

  </ContentPage>
);

export const AdminStructure = () => (
  <ContentPage title="प्रशासकीय रचना" publishedDate="१५ मार्च २०२४">
    <div className="bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-200 text-center">
      <div className="w-full max-w-2xl mx-auto bg-white p-4 shadow-sm rounded border">
        <img
          src="https://cdnbbsr.s3waas.gov.in/s385b75d04f478d3841e38eb64aefdb05a/uploads/2025/04/2025100843607430-2048x690.png"
          alt="Structure"
          className="w-full h-auto"
        />
      </div>
    </div>
  </ContentPage>
);

export const Organizations = () => (
  <ContentPage title="संस्था">

    <div className="space-y-8">

      <section>
        <h2 className="text-xl font-semibold mb-3 text-gray-800">
          अ) संलग्न कार्यालये
        </h2>

        <p className="p-4 bg-red-50 text-red-600 rounded-md border border-red-200 text-sm">
          उपलब्ध नाही
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3 text-gray-800">
          ब) संचालनालय / आयुक्तालय
        </h2>

        <p className="p-4 bg-red-50 text-red-600 rounded-md border border-red-200 text-sm">
          उपलब्ध नाही
        </p>
      </section>

    </div>

  </ContentPage>
);

export const WhosWho = () => (
  <ContentPage title="कोणाचे कोण">

    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">

        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="border p-3 text-left">नाव</th>
            <th className="border p-3 text-left">ईमेल</th>
            <th className="border p-3 text-left">पत्ता</th>
            <th className="border p-3 text-left">फोन</th>
          </tr>
        </thead>

        <tbody>
          <tr className="hover:bg-gray-50 transition whitespace-nowrap">

            <td className="border p-3 font-medium">
              श्री. प्रविण अण्णासाहेब सिनारे
            </td>

            <td className="border p-3 text-blue-600 break-all">
              bdosangamner@rediffmail.com
            </td>

            <td className="border p-3 text-sm leading-relaxed">
              पंचायत समिती कार्यालय,
              संगमनेर, तालुका संगमनेर,
              जिल्हा अहिल्यानगर, महाराष्ट्र – 422605
            </td>

            <td className="border p-3">
              02412355219
            </td>

          </tr>
        </tbody>

      </table>
    </div>

  </ContentPage>
);
