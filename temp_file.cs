using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            float[][] matrix = ParseMatrix(richTextBox1.Text);

            int a = -1;
            int b = -1;

            for (int i = 0; i < matrix.Length; i++)
            {
                for (int j = 0; j < matrix[i].Length; j++)
                {
                    if(a == -1 && matrix[i][j] < 0)
                    {
                        a = i;
                    }
                    if(b == -1 && matrix[i][j] == 0)
                    {
                        b = i;
                    }
                }
            }


            if (a < 0 || b < 0)
            {
                MessageBox.Show("Incorrect input");
                return;
            }

            float result = ScalarMultiplication(matrix[a], matrix[b]);

            MessageBox.Show($"Rows: {a}; {b}Result: {result}");
        }

        private float[][] ParseMatrix(string data)
        {
            float[][] ret;
            string[] rows = data.Split('\n');
            ret = new float[rows.Length][];

            for (int i = 0; i < ret.Length; i++)
            {
                string[] row = rows[i].Split(' ');
                ret[i] = new float[row.Length];

                for (int j = 0; j < row.Length; j++)
                {
                    ret[i][j] = float.Parse(row[j]);
                }
            }

            return ret;
        }

        private float ScalarMultiplication(float[] a, float[] b)
        {
            float sum = 0;
            for (int i = 0; i < a.Length; i++)
            {
                sum += a[i] * b[i];
            }
            return sum;
        }
    }
}
