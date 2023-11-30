import mock from "./mock.json"

export async function GET() {   

    return Response.json({ data:mock })
  }