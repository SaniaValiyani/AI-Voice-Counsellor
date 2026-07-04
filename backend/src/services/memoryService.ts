import Memory from "../models/Memory";

export async function getMemory(studentId: string) {
  let memory = await Memory.findOne({
    studentId,
  });

  if (!memory) {
    memory = await Memory.create({
      studentId,
    });
  }

  return memory;
}

export async function addMemory(
  studentId: string,
  memoryText: string
) {
  const memory =
    await getMemory(studentId);

  const facts =
    memoryText
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);

  for (const fact of facts) {
    if (!memory.memories.includes(fact)) {
      memory.memories.push(fact);
    }
  }

  if (memory.memories.length > 100) {
    memory.memories =
      memory.memories.slice(-100);
  }

  await memory.save();

  return memory;
}