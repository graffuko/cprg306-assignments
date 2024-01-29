import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
    return (
        <div>
            <h2>Sarah Graff</h2>
            <p>
                <Link href="https://github.com/graffuko/cprg306-assignments">
                    Visit my cprg306-assignments repository on GitHub.
                </Link>
            </p>
        </div>
    );
};

export default StudentInfo;