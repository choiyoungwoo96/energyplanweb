"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Board() {
  const [insquire, setInsquires] = useState([]);

  useEffect(() => {
    const inquiriesResult = async () => {
      try {
        const response = await fetch("/api/board");
        const data = await response.json();
        setInsquires(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch inquire:", err);
      }
    };
    inquiriesResult();
  }, []);

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4">글번호</th>
            <th className="px-4">작성자</th>
            <th className="px-4">내용</th>
            <th className="px-4">작성일</th>
          </tr>
        </thead>
        <tbody>
          {insquire.length > 0 ? (
            Object.values(insquire).map((item, index) => (
              <tr key={index}>
                <td>
                  <Link href={`/board/${item.id}`}>{item.id}</Link>
                </td>
                <td>{item.author_name}</td>
                <td>{item.inquiry_content}</td>
                <td>{item.created_at}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>데이터가 없습니다</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
