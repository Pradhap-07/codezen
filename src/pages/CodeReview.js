import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeReview = () => {
    const [code, setCode] = useState("");
    const [optimizedCode, setOptimizedCode] = useState("");
    const [aiFeedback, setAiFeedback] = useState("");
    const [detectedLang, setDetectedLang] = useState("javascript"); // Default to JavaScript
    const [loading, setLoading] = useState(false);

    const API_URL = process.env.REACT_APP_API_URL || "https://codezen-backend.onrender.com";

    console.log("🚀 API URL from Vercel ENV:", process.env.REACT_APP_API_URL);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!code.trim()) {
            console.error("🚨 Error: Code input is empty!");
            alert("Please enter some code before submitting.");
            return;
        }
    
        setLoading(true);
    
        try {

            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ userCode: code }),
            });
            
    
            if (!response.ok) {
                const errorResponse = await response.text();
                throw new Error(`Request failed with status ${response.status}: ${errorResponse}`);
            }
    
            const data = await response.json();
    
            console.log("✅ Response:", data);
            

            if (data.aiFeedback) {
                setAiFeedback(data.aiFeedback);
            
                // Extract optimized code from AI feedback using regex
                const codeBlockMatch = data.aiFeedback.match(/```(?:\w+)?\n([\s\S]+?)```/);
            
                if (codeBlockMatch) {
                    setOptimizedCode(codeBlockMatch[1].trim()); // Extracted code inside ``` ```
                } else {
                    console.warn("⚠️ No formatted code block found in AI feedback.");
                    setOptimizedCode("// No optimizations found");
                }
            }
            
            
    
            setDetectedLang(data.language || "javascript");
    
        } catch (error) {
            console.error("❌ Request Failed:", error.message);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <h1 className="text-4xl font-bold mb-6">🤖 AI-Powered Code Review</h1>

            <textarea
                className="w-full max-w-3xl h-48 p-4 bg-gray-800 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Paste your code here..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />

            <button
                className="mt-4 px-6 py-3 bg-blue-600 font-bold rounded-lg shadow-lg hover:bg-blue-700"
                onClick={handleSubmit}
                disabled={loading} // Prevents multiple submissions
            >
                {loading ? "⏳ Reviewing..." : "🚀 Submit for Review"}
            </button>

            {aiFeedback && (
                <div className="mt-4 w-full max-w-3xl p-4 bg-gray-800 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">💡 AI Feedback:</h2>
                    <p className="bg-gray-700 p-3 rounded text-sm leading-relaxed">
                        <ReactMarkdown>{aiFeedback}</ReactMarkdown>
                    </p>
                </div>
            )}

            {optimizedCode && (
                <div className="mt-6 w-full max-w-3xl p-4 bg-gray-800 rounded-lg">
                    <h2 className="text-xl font-bold mb-2 flex items-center">✅ Optimized Code:</h2>

                    <SyntaxHighlighter language={detectedLang} style={dracula} wrapLongLines={true}>
                        {optimizedCode.trim()}
                    </SyntaxHighlighter>

                </div>
            )}
        </div>
    );
};

export default CodeReview;