import React from 'react';
import {Result} from "../types";

interface Props {
    result: Result;
}

const ResultCard: React.FC<Props> = ({ result }) => {
    const total = result.bonobo + result.porori + result.nuburi;
    const getPercentage = (value: number) => ((value / total) * 100).toFixed(1);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">당신의 결과</h2>
            <div className="mb-2">
                <span className="font-bold">보노보노: </span>
                {getPercentage(result.bonobo)}%
            </div>
            <div className="mb-2">
                <span className="font-bold">포로리: </span>
                {getPercentage(result.porori)}%
            </div>
            <div className="mb-2">
                <span className="font-bold">너부리: </span>
                {getPercentage(result.nuburi)}%
            </div>
        </div>
    );
};

export default ResultCard;