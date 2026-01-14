import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Why Choose Our App?
                </h2>
                <p className="text-center text-gray-600 mb-12">
                    Simple, fast and effective item management solution
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6 border rounded-xl hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">🚀 Fast</h3>
                        <p className="text-gray-600">
                            Optimized performance using modern technologies.
                        </p>
                    </div>

                    <div className="text-center p-6 border rounded-xl hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">🎯 Simple</h3>
                        <p className="text-gray-600">
                            Clean UI and easy-to-use interface for everyone.
                        </p>
                    </div>

                    <div className="text-center p-6 border rounded-xl hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">🔒 Secure</h3>
                        <p className="text-gray-600">
                            Your data is handled safely with best practices.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;