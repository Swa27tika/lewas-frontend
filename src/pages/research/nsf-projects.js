import Layout from '../../components/Layout';
import Link from 'next/link';

export default function NSFProjects() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/research" className="text-blue-600 hover:text-blue-800">
            ← Back to Research
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 text-blue-600">
          Ongoing NSF Projects
        </h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 text-lg">
            Content for ongoing NSF projects will be added here.
          </p>
        </div>
      </div>
    </Layout>
  );
}
