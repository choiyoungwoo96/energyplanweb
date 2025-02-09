import { executeQuery } from "../../../../lib/db.conn";

export async function GET() {
  try {
    const inquires = await executeQuery("select * from inquiries", []);
    return new Response(JSON.stringify({ inquires }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database Error : ", error);
    return new Response(JSON.stringify({ error: "값을 불러올수 없습니다." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      inquiry_type,
      author_type,
      author_name,
      size_or_name,
      contact_number,
      email,
      address,
      inquiry_content,
    } = body;
    executeQuery(
      "insert into inquiries (inquiry_type,author_type,author_name,size_or_name,contact_number,email,address,inquiry_content) values (?,?,?,?,?,?,?,?)",
      [
        inquiry_type,
        author_type,
        author_name,
        size_or_name,
        contact_number,
        email,
        address,
        inquiry_content,
      ]
    );
    return new Response(
      JSON.stringify({
        success: true,
        message: "데이터베이스 테이블에 삽입되었습니다",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: "POST요청이 실패하였습니다" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function PUT() {}
