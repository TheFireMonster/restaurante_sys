// import { Request, Response } from 'express';
// import Pagamento from '../../models/Pagamento';

// export class PayController {
//   public async getPayment(req: Request, res: Response) {
//     try {
//       const payment = await Pagamento.findAll();
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Erro ao obter pagamentos' });
//     }
//   }

//   public async createPayment(req: Request, res: Response) {
//     try {
//       const paymentData = req.body;
//       const payment = await Pagamento.create(paymentData);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Erro ao criar pagamento' });
//     }
//   }

//   public async getPaymentById(req: Request, res: Response) {
//     try {
//       const id = req.params.id;
//       const payment = await Pagamento.findByPk(id);
//       if (!payment) {
//         res.status(404).json({ message: 'Pagamento não encontrado' });
//       } else {
//         res.json(payment);
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Erro ao obter pagamento por ID' });
//     }
//   }

//   public async updatePayment(req: Request, res: Response) {
//     try {
//       const id = req.params.id;
//       const paymentData = req.body; 
//       const payment = await Pagamento.update(paymentData, { where: { id_pagamento: id } }); 
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Erro ao atualizar pagamento' });
//     }
//   }

//   public async deletePayment(req: Request, res: Response) {
//     try {
//       const id = req.params.id; 
//       await Pagamento.destroy({ where: { id_pagamento: id } }); 
//       res.json({ message: 'Pagamento excluído com sucesso' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Erro ao excluir pagamento' });
//     }
//   }
// }
